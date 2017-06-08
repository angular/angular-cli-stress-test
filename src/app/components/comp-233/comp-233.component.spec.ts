/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp233Component } from './comp-233.component';

describe('Comp233Component', () => {
  let component: Comp233Component;
  let fixture: ComponentFixture<Comp233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
