/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2729Component } from './comp-2729.component';

describe('Comp2729Component', () => {
  let component: Comp2729Component;
  let fixture: ComponentFixture<Comp2729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
