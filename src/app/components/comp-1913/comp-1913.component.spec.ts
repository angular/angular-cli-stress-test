/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1913Component } from './comp-1913.component';

describe('Comp1913Component', () => {
  let component: Comp1913Component;
  let fixture: ComponentFixture<Comp1913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
