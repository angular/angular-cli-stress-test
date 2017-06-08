/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4041Component } from './comp-4041.component';

describe('Comp4041Component', () => {
  let component: Comp4041Component;
  let fixture: ComponentFixture<Comp4041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
