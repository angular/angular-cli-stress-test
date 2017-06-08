/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp416Component } from './comp-416.component';

describe('Comp416Component', () => {
  let component: Comp416Component;
  let fixture: ComponentFixture<Comp416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
