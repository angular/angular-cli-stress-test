/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1984Component } from './comp-1984.component';

describe('Comp1984Component', () => {
  let component: Comp1984Component;
  let fixture: ComponentFixture<Comp1984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
