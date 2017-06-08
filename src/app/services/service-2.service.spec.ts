/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service2Service } from './service-2.service';

describe('Service2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service2Service]
    });
  });

  it('should ...', inject([Service2Service], (service: Service2Service) => {
    expect(service).toBeTruthy();
  }));
});
