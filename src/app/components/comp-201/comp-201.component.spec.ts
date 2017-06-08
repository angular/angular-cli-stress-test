/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp201Component } from './comp-201.component';

describe('Comp201Component', () => {
  let component: Comp201Component;
  let fixture: ComponentFixture<Comp201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
