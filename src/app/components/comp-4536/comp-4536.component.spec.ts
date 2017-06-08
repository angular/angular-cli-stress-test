/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4536Component } from './comp-4536.component';

describe('Comp4536Component', () => {
  let component: Comp4536Component;
  let fixture: ComponentFixture<Comp4536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
