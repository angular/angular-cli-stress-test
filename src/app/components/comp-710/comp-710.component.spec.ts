/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp710Component } from './comp-710.component';

describe('Comp710Component', () => {
  let component: Comp710Component;
  let fixture: ComponentFixture<Comp710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
