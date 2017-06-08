/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp886Component } from './comp-886.component';

describe('Comp886Component', () => {
  let component: Comp886Component;
  let fixture: ComponentFixture<Comp886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
