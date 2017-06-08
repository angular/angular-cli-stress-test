/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4893Component } from './comp-4893.component';

describe('Comp4893Component', () => {
  let component: Comp4893Component;
  let fixture: ComponentFixture<Comp4893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
