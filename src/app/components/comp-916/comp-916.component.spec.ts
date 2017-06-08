/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp916Component } from './comp-916.component';

describe('Comp916Component', () => {
  let component: Comp916Component;
  let fixture: ComponentFixture<Comp916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
