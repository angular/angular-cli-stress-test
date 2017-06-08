/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3633Component } from './comp-3633.component';

describe('Comp3633Component', () => {
  let component: Comp3633Component;
  let fixture: ComponentFixture<Comp3633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
