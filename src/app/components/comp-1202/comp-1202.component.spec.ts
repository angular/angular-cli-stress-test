/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1202Component } from './comp-1202.component';

describe('Comp1202Component', () => {
  let component: Comp1202Component;
  let fixture: ComponentFixture<Comp1202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
