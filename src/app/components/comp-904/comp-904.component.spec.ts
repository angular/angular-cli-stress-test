/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp904Component } from './comp-904.component';

describe('Comp904Component', () => {
  let component: Comp904Component;
  let fixture: ComponentFixture<Comp904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
