/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2014Component } from './comp-2014.component';

describe('Comp2014Component', () => {
  let component: Comp2014Component;
  let fixture: ComponentFixture<Comp2014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
