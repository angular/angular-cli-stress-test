/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3610Component } from './comp-3610.component';

describe('Comp3610Component', () => {
  let component: Comp3610Component;
  let fixture: ComponentFixture<Comp3610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
