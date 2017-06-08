/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp195Component } from './comp-195.component';

describe('Comp195Component', () => {
  let component: Comp195Component;
  let fixture: ComponentFixture<Comp195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
