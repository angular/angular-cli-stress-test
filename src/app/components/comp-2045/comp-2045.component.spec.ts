/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2045Component } from './comp-2045.component';

describe('Comp2045Component', () => {
  let component: Comp2045Component;
  let fixture: ComponentFixture<Comp2045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
