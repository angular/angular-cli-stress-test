/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1263Component } from './comp-1263.component';

describe('Comp1263Component', () => {
  let component: Comp1263Component;
  let fixture: ComponentFixture<Comp1263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
