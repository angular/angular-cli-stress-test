/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp741Component } from './comp-741.component';

describe('Comp741Component', () => {
  let component: Comp741Component;
  let fixture: ComponentFixture<Comp741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
