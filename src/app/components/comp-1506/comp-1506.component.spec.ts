/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1506Component } from './comp-1506.component';

describe('Comp1506Component', () => {
  let component: Comp1506Component;
  let fixture: ComponentFixture<Comp1506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
