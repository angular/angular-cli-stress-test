/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1394Component } from './comp-1394.component';

describe('Comp1394Component', () => {
  let component: Comp1394Component;
  let fixture: ComponentFixture<Comp1394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
