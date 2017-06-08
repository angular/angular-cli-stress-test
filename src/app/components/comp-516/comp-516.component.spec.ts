/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp516Component } from './comp-516.component';

describe('Comp516Component', () => {
  let component: Comp516Component;
  let fixture: ComponentFixture<Comp516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
