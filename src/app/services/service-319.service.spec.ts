/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service319Service } from './service-319.service';

describe('Service319Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service319Service]
    });
  });

  it('should ...', inject([Service319Service], (service: Service319Service) => {
    expect(service).toBeTruthy();
  }));
});
