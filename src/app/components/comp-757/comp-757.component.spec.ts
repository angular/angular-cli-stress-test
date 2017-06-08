/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp757Component } from './comp-757.component';

describe('Comp757Component', () => {
  let component: Comp757Component;
  let fixture: ComponentFixture<Comp757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
