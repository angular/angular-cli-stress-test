/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1288Component } from './comp-1288.component';

describe('Comp1288Component', () => {
  let component: Comp1288Component;
  let fixture: ComponentFixture<Comp1288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
