/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp128Component } from './comp-128.component';

describe('Comp128Component', () => {
  let component: Comp128Component;
  let fixture: ComponentFixture<Comp128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
