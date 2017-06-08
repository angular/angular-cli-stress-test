/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp358Component } from './comp-358.component';

describe('Comp358Component', () => {
  let component: Comp358Component;
  let fixture: ComponentFixture<Comp358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
