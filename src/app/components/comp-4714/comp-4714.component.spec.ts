/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4714Component } from './comp-4714.component';

describe('Comp4714Component', () => {
  let component: Comp4714Component;
  let fixture: ComponentFixture<Comp4714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
