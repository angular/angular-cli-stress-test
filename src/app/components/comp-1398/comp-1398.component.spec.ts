/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1398Component } from './comp-1398.component';

describe('Comp1398Component', () => {
  let component: Comp1398Component;
  let fixture: ComponentFixture<Comp1398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
