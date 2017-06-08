/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service395Service } from './service-395.service';

describe('Service395Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service395Service]
    });
  });

  it('should ...', inject([Service395Service], (service: Service395Service) => {
    expect(service).toBeTruthy();
  }));
});
