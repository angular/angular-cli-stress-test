/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2918Component } from './comp-2918.component';

describe('Comp2918Component', () => {
  let component: Comp2918Component;
  let fixture: ComponentFixture<Comp2918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
