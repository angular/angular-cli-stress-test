/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp152Component } from './comp-152.component';

describe('Comp152Component', () => {
  let component: Comp152Component;
  let fixture: ComponentFixture<Comp152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
