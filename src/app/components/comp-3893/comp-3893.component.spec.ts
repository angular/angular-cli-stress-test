/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3893Component } from './comp-3893.component';

describe('Comp3893Component', () => {
  let component: Comp3893Component;
  let fixture: ComponentFixture<Comp3893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
