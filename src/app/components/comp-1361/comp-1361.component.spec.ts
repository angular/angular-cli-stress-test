/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1361Component } from './comp-1361.component';

describe('Comp1361Component', () => {
  let component: Comp1361Component;
  let fixture: ComponentFixture<Comp1361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
