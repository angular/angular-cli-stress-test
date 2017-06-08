/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp47Component } from './comp-47.component';

describe('Comp47Component', () => {
  let component: Comp47Component;
  let fixture: ComponentFixture<Comp47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp47Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
