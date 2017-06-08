/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp754Component } from './comp-754.component';

describe('Comp754Component', () => {
  let component: Comp754Component;
  let fixture: ComponentFixture<Comp754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
