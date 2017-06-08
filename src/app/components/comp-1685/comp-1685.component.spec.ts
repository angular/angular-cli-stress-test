/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1685Component } from './comp-1685.component';

describe('Comp1685Component', () => {
  let component: Comp1685Component;
  let fixture: ComponentFixture<Comp1685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
