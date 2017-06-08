/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp470Component } from './comp-470.component';

describe('Comp470Component', () => {
  let component: Comp470Component;
  let fixture: ComponentFixture<Comp470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
