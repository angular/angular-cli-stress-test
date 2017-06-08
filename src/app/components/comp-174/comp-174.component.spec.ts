/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp174Component } from './comp-174.component';

describe('Comp174Component', () => {
  let component: Comp174Component;
  let fixture: ComponentFixture<Comp174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
