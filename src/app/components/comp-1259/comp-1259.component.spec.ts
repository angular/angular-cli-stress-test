/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1259Component } from './comp-1259.component';

describe('Comp1259Component', () => {
  let component: Comp1259Component;
  let fixture: ComponentFixture<Comp1259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
