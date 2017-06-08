/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4229Component } from './comp-4229.component';

describe('Comp4229Component', () => {
  let component: Comp4229Component;
  let fixture: ComponentFixture<Comp4229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
