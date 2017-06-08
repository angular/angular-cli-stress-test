/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp775Component } from './comp-775.component';

describe('Comp775Component', () => {
  let component: Comp775Component;
  let fixture: ComponentFixture<Comp775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
