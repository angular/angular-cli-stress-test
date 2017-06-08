/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp228Component } from './comp-228.component';

describe('Comp228Component', () => {
  let component: Comp228Component;
  let fixture: ComponentFixture<Comp228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
