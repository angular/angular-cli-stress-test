/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2821Component } from './comp-2821.component';

describe('Comp2821Component', () => {
  let component: Comp2821Component;
  let fixture: ComponentFixture<Comp2821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
