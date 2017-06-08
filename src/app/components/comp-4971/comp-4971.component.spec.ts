/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4971Component } from './comp-4971.component';

describe('Comp4971Component', () => {
  let component: Comp4971Component;
  let fixture: ComponentFixture<Comp4971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
