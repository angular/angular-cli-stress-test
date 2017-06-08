/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp984Component } from './comp-984.component';

describe('Comp984Component', () => {
  let component: Comp984Component;
  let fixture: ComponentFixture<Comp984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
