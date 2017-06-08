/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp635Component } from './comp-635.component';

describe('Comp635Component', () => {
  let component: Comp635Component;
  let fixture: ComponentFixture<Comp635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
