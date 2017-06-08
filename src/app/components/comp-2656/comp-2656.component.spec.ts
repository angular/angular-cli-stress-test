/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2656Component } from './comp-2656.component';

describe('Comp2656Component', () => {
  let component: Comp2656Component;
  let fixture: ComponentFixture<Comp2656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
