/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3031Component } from './comp-3031.component';

describe('Comp3031Component', () => {
  let component: Comp3031Component;
  let fixture: ComponentFixture<Comp3031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
