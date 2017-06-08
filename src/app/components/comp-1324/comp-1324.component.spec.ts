/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1324Component } from './comp-1324.component';

describe('Comp1324Component', () => {
  let component: Comp1324Component;
  let fixture: ComponentFixture<Comp1324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
