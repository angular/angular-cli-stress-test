/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3466Component } from './comp-3466.component';

describe('Comp3466Component', () => {
  let component: Comp3466Component;
  let fixture: ComponentFixture<Comp3466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
